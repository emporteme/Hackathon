import styles from '../styles/sideBar.module.scss'
import { useState } from 'react';

export default function SideBar({ onFilterChange }) {

    const handleCheckboxChange = (type, value, isChecked) => {
        if (isChecked) {
            onFilterChange(type, (prev) => [...prev, value]);
        } else {
            onFilterChange(type, (prev) => prev.filter((item) => item !== value));
        }
    };

    // ...

    // Code for search
    const [search, setSearch] = useState('')  // Search field

    // Categories
    const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);

    const toggleCategoryDropdown = () => {
        setIsCategoryDropdownOpen(!isCategoryDropdownOpen);
    };

    // ...

    return (
        <>
            <div className={styles.sidebar}>
                <div className={styles.filters}>
                    <div className='subHeader'>Filter</div>
                    <div className={styles.filter}>
                        <div className={styles.filterTitle} onClick={toggleCategoryDropdown}>
                            Product Categories
                            <span
                                className={
                                    isCategoryDropdownOpen
                                        ? styles.filterTitleIconOpen
                                        : styles.filterTitleIconClosed
                                }
                            />
                        </div>
                        {isCategoryDropdownOpen && (
                            <div className={styles.dropdown}>
                                <input
                                    type="text"
                                    placeholder="Search product categories"
                                    onChange={(e) => setSearch(e.target.value)}
                                />
                                <div className={styles.checkboxGroup}>
                                    {shops // Replace with your shops data
                                        .flatMap((shop) => shop.products)
                                        .map((product) => product.category)
                                        .filter((category, index, self) => self.indexOf(category) === index)
                                        .filter((category) => {
                                            return category.toLowerCase().includes(search.toLowerCase());
                                        })
                                        .map((category) => {
                                            return (
                                                <div key={category}>
                                                    <label>
                                                        <input
                                                            type="checkbox"
                                                            onChange={(e) =>
                                                                handleCheckboxChange("category", category, e.target.checked)
                                                            }
                                                        />
                                                        <span>{category}</span>
                                                    </label>
                                                </div>
                                            );
                                        })}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}
