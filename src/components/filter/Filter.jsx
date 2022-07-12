import { nanoid } from 'nanoid';
import { FilterTitle, FilterWrap, FilterInput } from './Filter.styled';
import PropTypes from 'prop-types';

const filterId = nanoid();

export const Filter = ({ value, onChange }) =>
    <FilterWrap>
        <FilterTitle htmlFor={filterId}>Find Contacts by name</FilterTitle>
        <FilterInput type="text" value={value} onChange={onChange} id={filterId} />
    </FilterWrap>;

Filter.propTypes = {
    value: PropTypes.string.isRequired
}